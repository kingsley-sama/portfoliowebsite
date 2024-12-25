obj = {
    "name": "kingley",
    "title": "joma",
    "day": 2,
    "email":"me@gmail.com"
}

def print_obj(name, title, day, email):
    print(f"my name is {name} and my title is {title} i joined on {day}, this is my email {email}")


print_obj(**obj)