import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#386641', '#BC4749', '#6A994E', '#A7C957', '#F2E8CF']}
  />
  )
}
