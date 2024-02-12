const styles = {
  formControl: {
    '& input, textarea': {
      border: '1px red black',
    },
    '& span': {
      color: 'red',
    },
  },
  error: {
    '& input, textarea': {
      border: '5px red solid',
    },
},
formSummaryError: {
  border: 'red 1px solid',
  padding: '5px',
  color: 'red'
}
}

export default styles;


// const styles = {
//   formControl: {
//     '&.error input, &.error textarea': {
//       border: '2px red solid',
//     },
//     '&.error span': {
//       color: 'red',
//     },
//   },
// };

// export default styles;
