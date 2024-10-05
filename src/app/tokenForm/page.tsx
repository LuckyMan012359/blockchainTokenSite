import PageFooter from "../(dashboard)/components/footer";
import { PageHeader } from "../(dashboard)/components/header";
import TokenForm from "./component/basicTokenInfoComponent";

// const { TextArea } = Input;

const BasicTokenInfo = () => {
  return (
    <div>
      <PageHeader pageName="tokenForm" />
      <TokenForm />
      <PageFooter />
    </div>
  );
};

export default BasicTokenInfo;
