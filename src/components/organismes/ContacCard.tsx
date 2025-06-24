import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const ContactCard: React.FC = () => {
  return (
    <div className="contact-info">
      <div>
        <LocationOnIcon />
        <p>Herostrasse 12</p>
      </div>

      <div>
        <PhoneIcon />
        <p>+41 55 123 7</p>
      </div>

      <div>
        <EmailIcon />
        <p>contact@restfoods.fake</p>
      </div>

      <div>
        <QueryBuilderIcon />
        <p>We – Sun: 12:00 AM – 20:00 PM</p>
      </div>
    </div>
  );
};
export default ContactCard;
