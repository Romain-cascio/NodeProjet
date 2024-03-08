# generate_report.py
import pandas as pd
from sqlalchemy import create_engine

# Configuration de la connexion à la base de données
db_url = 'mysql://root:root@localhost:3306/olympics_dev'
engine = create_engine(db_url)

# Requête SQL pour récupérer toutes les lignes de la table sports
query = 'SELECT * FROM sports'

# Récupérer les données de la table sports dans un DataFrame pandas
df = pd.read_sql(query, engine)

# Chemin où sera sauvegardé le rapport CSV
output_csv_path = 'sports_report.csv'

# Sauvegarder le DataFrame au format CSV
df.to_csv(output_csv_path, index=False)

print(f"Rapport CSV généré avec succès dans : {output_csv_path}")
