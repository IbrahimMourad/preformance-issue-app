import { VeryHeavyComponentNoProps } from "./heavy-component";
import Wrapper from "./Wrapper";
const App = () => {
  return (
    <Wrapper>
      <VeryHeavyComponentNoProps />
    </Wrapper>
  );
};

export default App;
