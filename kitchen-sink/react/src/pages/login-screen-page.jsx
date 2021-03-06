import React from 'react';
import { Page, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <Page noToolbar noNavbar noSwipeback loginScreen>
        <LoginScreenTitle>Framework7</LoginScreenTitle>
        <List form>
          <ListItem>
            <Label>Username</Label>
            <Input type="text" placeholder="Your username" onInput={(e) => {
              this.setState({ username: e.target.value});
            }}></Input>
          </ListItem>
          <ListItem>
            <Label>Password</Label>
            <Input type="password" placeholder="Your password" onInput={(e) => {
              this.setState({ password: e.target.value});
            }}></Input>
          </ListItem>
        </List>
        <List>
          <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
        </List>
      </Page>
    )
  }
  signIn() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
      router.back();
    });
  }
};
