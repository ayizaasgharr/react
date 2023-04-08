import Class1 from "./Class1";
import Class2 from "./WithoutContext";
import PropsClass from "./PropsClass";
import HOC1 from "./HOC1";
import HOC2 from "./HOC2";
import LifeCycle from "./Lifecycle";
import LifeCycle2 from "./Lifecycle2";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import UseReducer from "./UseReducer";
function App() {
  return (
    <>
      //Class 1 I have used context hook to overcome props drilling
      <Class1 />
      //Class 2 we can see the problem faced from props drilling
      <Class2 />
      //Passing props from class components
      <PropsClass />
      //HOC was the Higher Order Component. And we have passed HOC1 and HOC2 as
      an argument to it.
      <HOC1 />
      <HOC2 />
      // Mounting LifeCycle Methods
      <LifeCycle />
      //Updating LifeCycle Methods
      <LifeCycle2 />
      //Controlled Component
      <ControlledComponent />
      //Uncontrolled Component
      <UncontrolledComponent />
      //Use reducer hook
      <UseReducer />
    </>
  );
}
export default App;
