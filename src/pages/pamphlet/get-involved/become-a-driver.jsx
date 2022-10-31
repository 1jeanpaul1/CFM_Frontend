import Head from 'next/head';
import { PageFooter, PamphletParagraph } from 'components/atoms';
import { Box } from '@mui/material';

export default function BecomeADriver() {
  return (
    <>
      <Head>
        <title>Fridge Finder: Become a Driver</title>
      </Head>
      <Box mx={8} mb={6}>
        <PamphletParagraph
          title="Become a Driver"
          variant="h1"
          body={[
            'Volunteer drivers have the capacity to support many fridges at once by transporting food to multiple locations. These driving routes are often coordinated between fridge organizers, food donors, and drivers. If you have access to a bike or vehicle, you can rescue food and feed people in need. The impact is immediate! Anyone is welcome to coordinate these efforts on their own, but if you would like to request our driver support, contact Fridge Finder.',
          ]}
          button={{
            title: 'Become a Driver',
            to: {
              pathname: '/user/contact',
              query: { subject: 'Transport Food' },
            },
            'aria-label': 'Become a Driver',
            variant: 'contained',
          }}
        />
      </Box>

      <PageFooter fixedAtBottom={true} />
    </>
  );
}
