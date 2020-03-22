import React, { ReactElement, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
export default function NoSSR({ children }: Props): ReactElement | null {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return <>{children}</>;
}
