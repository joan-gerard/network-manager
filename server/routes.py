from app import db, app
from flask import request, jsonify
from models import Contact

# GET all contacts
@app.route("/api/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    result = [Contact.to_json() for contact in contacts]
    return jsonify(result)

# Create a contact
@app.route("/api/contacts", methods=["POST"])
def create_contact():
    try:
        data = request.json
        
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        role = data.get("role")
        description = data.get("description")
        
        img_url = f"https://avatar.iran.liara.run/username?username={first_name}+{last_name}"
        
        new_contact = Contact(first_name=first_name, last_name=last_name, role=role, description=description, img_url=img_url)
        
        db.session.add(new_contact)
        
        db.session.commit()
        
        return jsonify({"message": "Contact created successfilly"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
