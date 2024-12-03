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
  "Sucuk",
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
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        fontWeight: "bold",
      }}
    >
      {malzemelerLİstesi.map((labelText, index) => (
        <FormGroup check inline key={index}>
          <Input
            type="checkbox"
            name="onaylanmisMalzemeler"
            value={labelText}
            onChange={handleCheckBoxChange}
            checked={onaylanmisMalzemeler.includes(labelText)}
            data-cy={`checkbox-${labelText}`}
          />
          <Label style={{ width: "122px" }} check>
            {labelText}
          </Label>
        </FormGroup>
      ))}
    </Form>
  );
};

export default CheckboxList;
