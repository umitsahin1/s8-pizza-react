import { Form, FormGroup, Input, Label } from "reactstrap";
const malzemelerLİstesi = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Pastırma",
  "Ananas",
  "Kabak",
];

const CheckboxList = ({ onaylanmisMalzemeler, onMalzemeChange }) => {
  const handleCheckBoxChange = (event) => {
    let { value, checked } = event.target;
    onMalzemeChange(value, checked);
  };

  return (
    <Form
      className="checkbox-container"
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        fontWeight: "bold",
      }}
    >
      {malzemelerLİstesi.map((labelText, index) => (
        <Label
          check
          inline
          key={index}
          className="checkbox-label"
          style={{ width: "190px" }}
          data-cy={`label-${labelText}`}
        >
          {labelText}
          <Input
            type="checkbox"
            name="onaylanmisMalzemeler"
            value={labelText}
            onChange={handleCheckBoxChange}
            checked={onaylanmisMalzemeler.includes(labelText)}
            data-cy={`checkbox-${labelText}`}
          />
          <span className="checkmark"></span>
        </Label>
      ))}
    </Form>
  );
};

export default CheckboxList;
