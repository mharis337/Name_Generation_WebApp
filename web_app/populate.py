import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_app.settings')

import django,csv
django.setup()

from namegen.models import Abbreviations
from pathlib import Path

def addAbbreviations():
    BASE_DIR = Path(__file__).resolve().parent.parent
    STATIC_DIR = Path.joinpath(BASE_DIR, "static")
    CSV_FILE = Path.joinpath(STATIC_DIR, "Abbreviations.csv")

    with open("static/Abbreviations.csv") as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = Abbreviations.objects.get_or_create(
                asset_type=row[0],
                entity=row[1],
                abv=row[2],
                )
            try:
                created.save()
            except:
                print ("There was a problem adding", row)
                
if __name__ == '__main__':
    print("populating script")
    addAbbreviations()