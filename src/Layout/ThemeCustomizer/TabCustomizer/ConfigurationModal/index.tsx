import { toast } from "react-toastify";
import { Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Btn, P } from "../../../../AbstractElements";
import ConfigDB from "../../../../Config/ThemeConfig";
import { ConfigurationProps } from "../../../../Types/Layout.type";
import { Cancel, ConfigurationTitle, CopyTextButton } from "../../../../Utils/Constants";
import ConfigurationContent from "./ConfigurationContent";

export default function Configuration({ modal, toggle }: ConfigurationProps) {
  const handleThemeCopy = async () => {
    const clipBoardString = JSON.stringify(ConfigDB, null, 2);
    await navigator.clipboard.writeText(clipBoardString);
    toast.success("Code Copied to clipboard !", { position: "bottom-right" });
  };
  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
      <ModalHeader toggle={toggle}>{ConfigurationTitle}</ModalHeader>
      <ModalBody>
        <Container fluid={true} className="bd-example-row">
          <Row>
            <P>{"To replace our design with your desired theme. Please do configuration as mention"}</P>
            <P>
              <b> {"Path : src > Config > ThemeConfig.tsx "}</b>
            </P>
          </Row>
          <ConfigurationContent />
        </Container>
      </ModalBody>
      <ModalFooter>
        <Btn color="primary" className="notification" onClick={handleThemeCopy}>
          {CopyTextButton}
        </Btn>
        <Btn color="secondary" onClick={toggle}>
          {Cancel}
        </Btn>
      </ModalFooter>
    </Modal>
  );
}
