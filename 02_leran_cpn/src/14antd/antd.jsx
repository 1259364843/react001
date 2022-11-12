import React, { PureComponent } from 'react'
import { Button } from 'antd';
export default class Antd extends PureComponent {
  render() {
    return (
      <div>
      Antd
      <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
      </div>
    )
  }
}
