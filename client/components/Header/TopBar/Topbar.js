import React from "react";
import Link from "next/link";
import {
  Container,
  Grid,
  GridColumn,
  Image,
  Input,
  Search,
} from "semantic-ui-react";

const Topbar = () => {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>

          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Topbar;
function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="Gaming" />
      </a>
    </Link>
  );
}

function Searh() {
  return <Input id="search-game" icon={{ name: "search" }} />;
}
