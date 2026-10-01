import React from 'react';
import { Text, Field, RichText as ContentSdkRichText } from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title?: Field<string>;
  Description?: Field<string>;
}

type CustomComponent1Props = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CustomComponent1Props): React.ReactElement => {
  return (
    <div className={"component customcomponent1 " + (props.params?.styles ?? '')}>
      <div className="component-content">
        <div>
          <Text field={props.fields.Title} tag='h1' />
        </div>
        {props.fields.Description && (
          <div>
            <ContentSdkRichText field={props.fields.Description} />
          </div>
        )}
      </div>
    </div>
  );
};