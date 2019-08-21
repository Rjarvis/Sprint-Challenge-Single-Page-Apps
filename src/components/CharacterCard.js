import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import {Card, Image, Icon} from 'semantic-ui-react';

export default function CharacterCard(props) {
  // const location = props.props.location.name;
  console.log(props.props);
  return (
    <Card>
      <Image src={props.props.image} wrapped ui={true} />
      <Card.Content>
        <Card.Header>{props.props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.props.species}{props.props.status}</span>
        </Card.Meta>
        <Card.Description>
          {/* {props.props.origin.name} */}
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
        </a>
    </Card.Content>
  </Card>

  );
}
