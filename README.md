# Name Generation WebApp

This project is a Django-based web application designed to generate unique names for cloud resources. The app helps streamline the naming process, ensuring consistency and adherence to naming conventions for cloud infrastructure.

## Features

- **Customizable Name Generation**: Users can define parameters to generate unique, meaningful names for cloud resources.
- **Database Support**: A SQLite database (`db.sqlite3`) is used to store user-defined configurations and generated names.
- **User-Friendly Interface**: The app provides an intuitive web interface for managing name generation.
- **Preloaded Data**: Includes a `populate.py` script to prefill the database with sample data for quick setup.

## Project Structure

```
Name_Generation_WebApp
├── db.sqlite3          # SQLite database file
├── manage.py           # Django's management script
├── namegen/            # Core app for name generation logic
├── populate.py         # Script for populating the database
├── static/             # Static assets (CSS, JavaScript, images)
├── templates/          # HTML templates for the frontend
├── web_app/            # Main Django project folder
```

## Requirements

To run the project, ensure you have the following installed:

- Python 3.8+
- Django 3.2+
- SQLite (comes pre-installed with Python)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Name_Generation_WebApp.git
   cd Name_Generation_WebApp
   ```

2. Set up a virtual environment:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

   If `requirements.txt` is not available, manually install Django:

   ```bash
   pip install django
   ```

4. Run database migrations:

   ```bash
   python manage.py migrate
   ```

5. (Optional) Populate the database:

   ```bash
   python populate.py
   ```

6. Start the development server:

   ```bash
   python manage.py runserver
   ```

   Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to access the app.

## Usage

1. Open the app in your web browser.
2. Define parameters for generating cloud resource names (e.g., environment, resource type, region).
3. Generate and view the list of names.
4. Save your preferred names for future use.

## Contributing

Feel free to fork the repository, create a new branch, and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See `LICENSE` for more information.

## Contact

For inquiries, please contact Muhammad Haris at [muhammadharis337@gmail.com](mailto:muhammadharis337@gmail.com).
