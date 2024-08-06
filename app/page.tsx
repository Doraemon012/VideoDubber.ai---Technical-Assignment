import { Welcome } from '../components/Welcome/Welcome';
import { Container, Image } from '@mantine/core';

export default function HomePage() {
  return (
    <Container style={{alignItems:'flex-start'}} mx={'auto'} maw={820}>
      <Welcome />
    </Container>
  );
}
