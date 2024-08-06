import { Title, Text, Anchor, Container, Breadcrumbs } from '@mantine/core';
import classes from './Welcome.module.css';
import { Image } from '@mantine/core';
import { ButtonsConatiner } from '../ButtonsConatiner/ButtonsContainer';

export function Welcome() {
  return (
    <Container py={50}>
      <div className={classes.contentWrapper}>
        <div className={classes.textContainer}>
          <Breadcrumbs className={classes.breadcrumbs} mt={2} mb="lg" separator=">">
            <div className={classes.breadcrumb} style={{ textDecoration: 'None', cursor: 'pointer' }}>
              Home
            </div>
            <div className={classes.breadcrumb} style={{ textDecoration: 'None', cursor: 'pointer' }}>
              Product
            </div>
            <div className={classes.breadcrumb} style={{ textDecoration: 'None', cursor: 'pointer' }}>
              VideoDubber - Fast Video Translator
            </div>
          </Breadcrumbs>
          <Container style={{ width: 110, height: 80 }} mt={32} ml={0}>
            <Image
              src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/autodubber-logo-1.svg"
              alt="VideoDubber"
              width={52}
              height={52}
            />
          </Container>
          <Title className={classes.title} mt={2}>
            VideoDubber - Fast Video Translator
          </Title>
          <Text className={classes.subtitle}>
            Translate videos in your own voice, globalize in a click!
          </Text>
        </div>
        <div className={classes.toggleContainer}>
        <ButtonsConatiner />
        </div>
      </div>
    </Container>
  );
}
