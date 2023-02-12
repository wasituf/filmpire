import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
}))

export default useStyles
