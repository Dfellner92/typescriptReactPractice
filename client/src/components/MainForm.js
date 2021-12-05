import "./MainForm.css";

const MainForm = () => {
  return (
    <div className="container">
      <form className="form">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MainForm;
