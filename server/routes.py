from app import db, app
from flask import request, jsonify
from models import Contact

# GET all contacts
@app.route("/api/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    result = [contact.to_json() for contact in contacts]
    return jsonify(result)

# Create a contact
@app.route("/api/contacts", methods=["POST"])
def create_contact():
    try:
        data = request.json
        
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        role = data.get("role")
        company = data.get("company")
        email = data.get("email")
        linkedin_profile = data.get("linkedin_profile")
        phone_number = data.get("phone_number")
        notes = data.get("notes")
        
        img_url = f"https://avatar.iran.liara.run/username?username={first_name}+{last_name}"
        
        new_contact = Contact(first_name=first_name, last_name=last_name, role=role, company=company, email=email, linkedin_profile=linkedin_profile, phone_number=phone_number, notes=notes, img_url=img_url)
        print(new_contact)
        
        db.session.add(new_contact)
        
        db.session.commit()
        
        return jsonify(new_contact.to_json()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
