import json




with open('spartans.txt', 'r') as file:
    names = file.readlines()
    names = map(lambda s: s.strip(), names)


for name in names:
    HOSTEL = "SPARTAN"
    YEAR = 'MYP5'
    STREAK = 0
    NAME = name

    with open("single_user.json", "r") as json_file:

        spartan = json.load(json_file)
        spartan['ABDUL MUBARIK MOHAMMED'] = NAME
        spartan['ABDUL MUBARIK MOHAMMED'][0]['class'] = YEAR
        spartan['ABDUL MUBARIK MOHAMMED'][0]['hostel'] = HOSTEL
        spartan['ABDUL MUBARIK MOHAMMED'][0]['streak'] = STREAK



    with open('spartans.json', 'r+') as file:
        data = json.load(file)
        data['SPARTANS'].update(spartan)
        # data['SPARTANS'][name][0]['0'] = year

        file.seek(0)
        json.dump(data, file, indent=4)
