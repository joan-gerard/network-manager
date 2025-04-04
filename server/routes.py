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
        
        required_fields = ["first_name", "last_name", "role", "company", "email"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": "Bad Request", "message": f"The '{field}' field is required."}), 400    
            
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        role = data.get("role")
        company = data.get("company")
        email = data.get("email")
        linkedin_profile = data.get("linkedin_profile")
        phone_number = data.get("phone_number")
        notes = data.get("notes")
        
        img_url = f"https://avatar.iran.liara.run/username?username={first_name}+{last_name}"
        
        # TODO: Add timestamp for created_at and updated_at
        
        new_contact = Contact(first_name=first_name, last_name=last_name, role=role, company=company, email=email, linkedin_profile=linkedin_profile, phone_number=phone_number, notes=notes, img_url=img_url)
        print(new_contact)
        
        db.session.add(new_contact)
        
        db.session.commit()
        
        return jsonify(new_contact.to_json()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# Delete a contact
@app.route("/api/contacts/<int:contact_id>", methods=["DELETE"])
def delete_contact(contact_id):
    try:
        contact = Contact.query.get(contact_id)
        if not contact:
            return jsonify({"error": "Not Found", "message": "Contact not found."}), 404
        
        db.session.delete(contact)
        db.session.commit()
        
        return jsonify({"message": "Contact deleted successfully."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
# Update a contact
@app.route("/api/contacts/<int:contact_id>", methods=["PATCH"])
def update_contact(contact_id):
    try:
        data = request.json
        contact = Contact.query.get(contact_id)
        
        if not contact:
            return jsonify({"error": "Not Found", "message": "Contact not found."}), 404
        
        for key, value in data.items():
            setattr(contact, key, value)
        
        db.session.commit()
        
        return jsonify(contact.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500