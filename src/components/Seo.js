import React from 'react'
import Head from 'next/head';

export const Seo = (props) => {
    const title= props.title;
    const name= props.metaName;
    const content= props.metaContent;
    const key= props.metaKey;
  return (
    <div>
        <Head>
          <title>
            {title}
          </title>
          <meta
            name={name}
            content={content}
            key={key}
          />
      </Head>
    </div>
  )
}
