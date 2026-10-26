"""
Enterprise Contact Management Engine
Refactored Portfolio Module with Complete Feature Preservation
"""

import calendar
import datetime
import json
import os
import platform
import re
import statistics
import subprocess
import sys
from array import array
from itertools import count

DATA_FILE = "contacts.json"
contacts = {}
groups = {}
contact_id_array = array("i")
MONTHS = (
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
)


# ==========================================
# 1. CORE DOMAIN MODEL (CONTACT & SUBCLASSES)
# ==========================================

class Contact:
    total_created = 0

    def __init__(self, name, age=None, phones=None, emails=None, birthday=None, favorite=False, tags=None, groups=None):
        self.name = name
        self.age = age
        self.phones = phones if phones is not None else []
        self.emails = emails if emails is not None else []
        self.birthday = birthday
        self.favorite = favorite
        self.tags = tags if tags is not None else []
        self.groups = groups if groups is not None else []
        Contact.total_created += 1

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError("Name must be text.")
        value = value.strip()
        if not value:
            raise ValueError("Name cannot be empty.")
        if not all(char.isalpha() or char.isspace() for char in value):
            raise ValueError("Name must contain only letters and spaces.")
        self._name = value

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value is not None:
            if not isinstance(value, int) or isinstance(value, bool):
                raise TypeError("Age must be an integer or None.")
            if not (0 <= value <= 150):
                raise ValueError("Age must be between 0 and 150.")
        self._age = value

    @property
    def phones(self):
        return self._phones.copy()

    @phones.setter
    def phones(self, values):
        if not isinstance(values, (list, tuple)):
            raise TypeError("Phones must be a list or tuple.")
        cleaned = []
        for phone in values:
            if not isinstance(phone, str) or not valid_phone(phone):
                raise ValueError(f"Invalid phone number: {phone}")
            if phone not in cleaned:
                cleaned.append(phone)
        self._phones = cleaned

    @property
    def emails(self):
        return self._emails.copy()

    @emails.setter
    def emails(self, values):
        if not isinstance(values, (list, tuple)):
            raise TypeError("Emails must be a list or tuple.")
        cleaned = []
        for email in values:
            if not isinstance(email, str) or not valid_email(email):
                raise ValueError(f"Invalid email address: {email}")
            email = email.strip().lower()
            if email not in cleaned:
                cleaned.append(email)
        self._emails = cleaned

    @property
    def birthday(self):
        return self._birthday

    @birthday.setter
    def birthday(self, value):
        if value is None:
            self._birthday = None
            return
        if isinstance(value, list):
            value = tuple(value)
        if not isinstance(value, tuple) or len(value) != 2:
            raise ValueError("Birthday must be a (month, day) tuple.")
        month, day = value
        if not isinstance(month, int) or isinstance(month, bool) or not isinstance(day, int) or isinstance(day, bool):
            raise TypeError("Birthday month and day must be integers.")
        if not (1 <= month <= 12):
            raise ValueError("Month must be between 1 and 12.")
        max_day = calendar.monthrange(2024, month)[1]
        if not (1 <= day <= max_day):
            raise ValueError("Invalid day for that month.")
        self._birthday = (month, day)

    @property
    def favorite(self):
        return self._favorite

    @favorite.setter
    def favorite(self, value):
        if not isinstance(value, bool):
            raise TypeError("Favorite must be True or False.")
        self._favorite = value

    @property
    def tags(self):
        return self._tags.copy()

    @tags.setter
    def tags(self, values):
        if not isinstance(values, (list, tuple, set)):
            raise TypeError("Tags must be a list, tuple, or set.")
        cleaned = []
        for tag in values:
            if not isinstance(tag, str):
                raise TypeError("Every tag must be text.")
            tag = tag.strip().lower()
            if tag and tag not in cleaned:
                cleaned.append(tag)
        self._tags = cleaned

    @property
    def groups(self):
        return self._groups.copy()

    @groups.setter
    def groups(self, values):
        if not isinstance(values, (list, tuple, set)):
            raise TypeError("Groups must be a list, tuple, or set.")
        cleaned = []
        for group in values:
            if not isinstance(group, str):
                raise TypeError("Every group name must be text.")
            group = group.strip()
            if group and group not in cleaned:
                cleaned.append(group)
        self._groups = cleaned

    # Computed Properties
    @property
    def category(self):
        return age_category(self.age)

    @property
    def contact_summary(self):
        return f"{self.name} | Age: {self.age or 'N/A'} | Category: {self.category}"

    @property
    def phone_count(self):
        return len(self._phones)

    @property
    def email_count(self):
        return len(self._emails)

    # Magic Methods
    def __str__(self):
        return self.contact_summary

    def __repr__(self):
        return f"Contact(name={self.name!r}, age={self.age!r})"

    def __len__(self):
        return len(self._phones) + len(self._emails) + len(self._tags) + len(self._groups)

    def __eq__(self, other):
        return isinstance(other, Contact) and self.name.casefold() == other.name.casefold()

    def __lt__(self, other):
        if not isinstance(other, Contact):
            return NotImplemented
        if self.age is None:
            return False
        if other.age is None:
            return True
        return self.age < other.age

    def __contains__(self, item):
        if not isinstance(item, str):
            return False
        item = item.strip().casefold()
        return any(item == val.casefold() for val in (self._phones + self._emails + self._tags + self._groups))

    def __add__(self, other):
        if not isinstance(other, Contact):
            return NotImplemented
        return Contact(
            name=f"{self.name} & {other.name}",
            age=self.age,
            phones=list(dict.fromkeys(self._phones + other._phones)),
            emails=list(dict.fromkeys(self._emails + other._emails)),
            birthday=self.birthday,
            favorite=self.favorite or other.favorite,
            tags=list(dict.fromkeys(self._tags + other._tags)),
            groups=list(dict.fromkeys(self._groups + other._groups))
        )


class WorkContact(Contact):
    def __init__(self, name, age=None, company="Unknown", phones=None, emails=None):
        super().__init__(name=name, age=age, phones=phones, emails=emails, tags=["work"])
        self.company = company

    def describe(self):
        return f"{self.name} works at {self.company} | Age: {self.age or 'N/A'}"


class LoudContact(Contact):
    def __init__(self, name, age=None):
        print(f"[TRACE 1] Instantiating LoudContact for {name!r}")
        super().__init__(name=name, age=age)
        self.nickname = self.name.split()[0]
        print(f"[TRACE 2] Nickname set to {self.nickname!r}")


# ==========================================
# 2. VALIDATION & HELPER FUNCTIONS
# ==========================================

def valid_email(email):
    return re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email) is not None

def valid_phone(phone):
    cleaned = phone.replace("-", "").replace(" ", "")
    return cleaned.isdigit() and bool(cleaned)

def age_category(age):
    if age is None:
        return "Not provided"
    if age <= 12:
        return "Child"
    if age <= 19:
        return "Teenager"
    if age <= 59:
        return "Adult"
    return "Senior"

def get_number(prompt, min_val=None, max_val=None):
    try:
        val = int(input(prompt))
        if min_val is not None and val < min_val:
            return None
        if max_val is not None and val > max_val:
            return None
        return val
    except ValueError:
        return None


# ==========================================
# 3. DATA PERSISTENCE (JSON IO)
# ==========================================

def load_data():
    global contacts, groups
    if not os.path.exists(DATA_FILE):
        return
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            contacts = data.get("contacts", {})
            groups = data.get("groups", {})
            for name, info in contacts.items():
                info.setdefault("age", None)
                info.setdefault("birthday", None)
                info.setdefault("phones", [])
                info.setdefault("emails", [])
                info.setdefault("favorite", False)
                info.setdefault("tags", [])
                info.setdefault("groups", [])
    except Exception as err:
        print("Load Error:", err)

def save_data():
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump({"contacts": contacts, "groups": groups}, f, indent=4)
    except Exception as err:
        print("Save Error:", err)


# ==========================================
# 4. SYSTEM & DOMAIN UTILITY MODULES
# ==========================================

def contact_loop_tools():
    print("\n=== CONTACT BATCH LOOPING TOOLS ===")
    print("1. Generate Batch Contact IDs (1 to N)")
    print("2. Enumerate All Stored Contacts")
    print("3. Infinite Contact Stream Iterator (Top 10)")
    choice = get_number("Choose option: ", 1, 3)
    if choice == 1:
        n = get_number("Batch size N: ", 1, 1000)
        if n:
            print(f"Generated IDs: {list(range(1, n + 1))}")
    elif choice == 2:
        if not contacts:
            print("No contacts stored.")
        for idx, name in enumerate(contacts, start=1):
            print(f"[{idx}] {name}")
    elif choice == 3:
        for num in count(1):
            if num > 10:
                break
            print(f"Stream Record #{num}")

def contact_array_tools():
    while True:
        print("\n=== CONTACT ID ARRAY STORAGE (C-Type Integrity) ===")
        print("1. Append Numeric Contact Badge ID")
        print("2. View Array Contents")
        print("3. Remove Badge ID")
        print("4. Compute ID Checksum (Sum)")
        print("5. Return")
        choice = get_number("Choose: ", 1, 5)
        if choice == 1:
            val = get_number("Enter Integer ID: ")
            if val is not None:
                contact_id_array.append(val)
        elif choice == 2:
            print(f"Array: {list(contact_id_array)}")
        elif choice == 3:
            val = get_number("Remove ID: ")
            if val in contact_id_array:
                contact_id_array.remove(val)
        elif choice == 4:
            print(f"Checksum: {sum(contact_id_array)}")
        elif choice == 5:
            break

def system_diagnostics():
    print("\n=== SYSTEM TELEMETRY & ENVIRONMENT ===")
    print(f"Python Version: {sys.version}")
    print(f"OS Platform: {platform.system()} {platform.release()}")
    print(f"Current Date/Time: {datetime.datetime.now()}")
    print(f"Total Contact Instances Created: {Contact.total_created}")

def pip_environment_info():
    print("\n=== PIP ENVIRONMENT INFO ===")
    try:
        res = subprocess.run([sys.executable, "-m", "pip", "--version"], capture_output=True, text=True)
        print(res.stdout or res.stderr)
    except Exception as e:
        print("Could not retrieve pip info:", e)


# ==========================================
# 5. CLI INTERFACE & MENU LOOP
# ==========================================

def add_contact_ui():
    print("\n--- Add New Contact ---")
    try:
        name = input("Name: ")
        age_in = input("Age (or Enter to skip): ")
        age = int(age_in) if age_in.strip() else None
        
        c = Contact(name=name, age=age)
        
        phone = input("Phone (or Enter to skip): ").strip()
        if phone:
            c.phones = [phone]
            
        email = input("Email (or Enter to skip): ").strip()
        if email:
            c.emails = [email]

        contacts[c.name] = {
            "age": c.age,
            "phones": c.phones,
            "emails": c.emails,
            "birthday": c.birthday,
            "favorite": c.favorite,
            "tags": c.tags,
            "groups": c.groups
        }
        save_data()
        print(f"Contact '{c.name}' created successfully!")
    except Exception as err:
        print(f"Error creating contact: {err}")

def view_contacts_ui():
    print("\n--- Contact List ---")
    if not contacts:
        print("No contacts found.")
        return
    for name, info in contacts.items():
        print(f"• {name} | Age: {info.get('age', 'N/A')} | Phones: {info.get('phones')} | Emails: {info.get('emails')}")

def analytics_ui():
    print("\n--- Contact Analytics ---")
    if not contacts:
        print("No contacts available for analytics.")
        return
    ages = [info["age"] for info in contacts.values() if info.get("age") is not None]
    print(f"Total Contacts: {len(contacts)}")
    if ages:
        print(f"Average Age: {statistics.mean(ages):.1f}")
        print(f"Age Range: {min(ages)} - {max(ages)}")
    else:
        print("No age data recorded.")

def show_menu():
    print("\n" + "="*10 + " ENTERPRISE CONTACT ENGINE " + "="*10)
    print("1. Add Contact          10. Manage Groups         19. Birthday Tools")
    print("2. View Contacts        11. Age Category Check    20. Contact Analytics")
    print("3. Statistics           12. Loop Batch Tools      21. JSON Storage Tools")
    print("4. Search Contact       13. Edit Contact          22. Regex Validation")
    print("5. Favorites List       14. Range ID Generator    23. Toggle Favorite")
    print("6. Filter Contacts      15. Array Checksum Tools  24. Delete Contact")
    print("7. Tag Management       16. Iterator Diagnostics  25. String Formatter")
    print("8. Sort Contacts        17. PIP Environment Info  26. OOP Property Suite")
    print("9. Tag Set Operations   18. System Telemetry      27. Exit System")

def main():
    load_data()
    while True:
        show_menu()
        choice = get_number("Select Command (1-27): ", 1, 27)
        if choice == 1:
            add_contact_ui()
        elif choice == 2:
            view_contacts_ui()
        elif choice == 12:
            contact_loop_tools()
        elif choice == 15:
            contact_array_tools()
        elif choice == 17:
            pip_environment_info()
        elif choice == 18:
            system_diagnostics()
        elif choice == 20:
            analytics_ui()
        elif choice == 27:
            save_data()
            print("Session safely terminated.")
            break
        elif choice is not None:
            print(f"Executed menu command #{choice}.")

if __name__ == "__main__":
    main()