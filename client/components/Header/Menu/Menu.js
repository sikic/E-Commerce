import {
  Container,
  Menu,
  Grid,
  Icon,
  Label,
  GridColumn,
} from "semantic-ui-react";

import Link from "next/link";

const MenuWeb = () => {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <GridColumn className="menu__left" width={6}>
            <MenuPlatform />
          </GridColumn>

          <GridColumn className="menu__right" width={10}>
            <MenuOption />
          </GridColumn>
        </Grid>
      </Container>
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

function MenuOption() {
  return (
    <Menu>
      <Menu.Item as="a" id="mi-cuenta">
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
