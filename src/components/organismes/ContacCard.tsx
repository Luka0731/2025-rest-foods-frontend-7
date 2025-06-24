import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import "../../styling/ContactPage.css";
const ContactCard: React.FC = () => {
  return (
    <div className="contact-info">
      <h3>CONTACT DETAILS</h3>
      <div className="line">
        <LocationOnIcon />
        <p>Herostrasse 12</p>
      </div>

      <div className="line">
        <PhoneIcon />
        <p>+41 55 123 7</p>
      </div>

      <div className="line">
        <EmailIcon />
        <p>contact@restfoods.fake</p>
      </div>

      <div className="line">
        <QueryBuilderIcon />
        <p>We – Sun: 12:00 AM – 23:00 PM</p>
      </div>
    </div>
  );
};
export default ContactCard;
