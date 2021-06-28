import React, { PropsWithChildren } from 'react';

import classnames from 'classnames';

interface IProps {
  className?: string;
}

export default function Card({
  className,
  children,
}: PropsWithChildren<IProps>): React.ReactElement {
  return (
    <div className={classnames('p-6 rounded-lg shadow flex flex-col', className)}>{children}</div>
  );
}
