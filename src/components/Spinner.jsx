import GridLoader from 'react-spinners/GridLoader'

const Spinner = ({ loading }) => {

    const overide = {
        display: 'block',
        margin: '100px auto',
    };
  return (
    <GridLoader 
        color='#0abe60'
        loading = { loading }
        cssOverride={ overide }
        size={ 100 }
    />
  )
}

export default Spinner