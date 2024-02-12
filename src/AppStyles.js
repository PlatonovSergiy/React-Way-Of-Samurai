const styles = {
  appWrapper: {
  margin: '0 auto',
  display: 'grid',
  width: '1200px',
  gridTemplateAreas: `
    'h h'
    'n c'
  `,
  gridTemplateRows: '60px 1fr',
  gridTemplateColumns: '2fr 10fr',
},
header: {
  gridArea: 'h',
  backgroundColor: 'green',
  '& img': {
    width: '20px',
  },
},
nav: {
  gridArea: 'n',
  backgroundColor: 'burlywood',
},
appWrapperContent: {
  gridArea: 'c',
  backgroundColor: 'cornflowerblue',
},
};

export default styles;