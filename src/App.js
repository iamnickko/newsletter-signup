import Form from "./components/Form";
import Card from "./components/Card";
import signupImage from "./images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <>
      <Card className="flex max-w-3xl my-40">
        <div className="p-5 self-center">
          <h1 className="text-5xl font-bold text-center mb-5">Stay updated!</h1>
          <p className="text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list-image-tick list-inside leading-8 mt-4">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <Form />
        </div>
        <div>
          <img src={signupImage} alt="sign up" />
        </div>
      </Card>
    </>
  );
}

export default App;
