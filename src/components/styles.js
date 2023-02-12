import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    height: '100%',
    maxWidth: '100% !important',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
    width: '100%',
  },
})

export default useStyles
