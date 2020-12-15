import {
  Container,
  Menu,
  Grid,
  Icon,
  Label,
  GridColumn,
} from "semantic-ui-react";
import { useState } from "react";
import Link from "next/link";
import BasicModal from "../Modal/BasicModal";
import Auth from "../../Auth";

const MenuWeb = () => {
  const [showModal, setShowModal] = useState(false);
  const [onCloseModal, setOnCloseModal] = useState(false);
  const [title, setTitle] = useState("Iniciar Sesión");

  const onShowModal = () => setShowModal(true);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <GridColumn className="menu__left" width={6}>
            <MenuPlatform />
          </GridColumn>

          <GridColumn className="menu__right" width={10}>
            <MenuOption onShowModal={onShowModal} />
          </GridColumn>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={title}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTitle={setTitle} />
      </BasicModal>
    </div>
  );
};

export default MenuWeb;

function MenuPlatform() {
  return (
    <Menu>
      <Link href="/play-station">
        <Menu.Item as="a">PlayStation</Menu.Item>
      </Link>
      <Link href="/play-station">
        <Menu.Item as="a">Xbox</Menu.Item>
      </Link>
      <Link href="/play-station">
        <Menu.Item as="a">Swicth</Menu.Item>
      </Link>
    </Menu>
  );
}

function MenuOption(props) {
  const { onShowModal } = props;
  return (
    <Menu>
      <Menu.Item as="a" id="mi-cuenta" onClick={onShowModal}>
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
