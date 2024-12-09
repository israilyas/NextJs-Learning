const MyProfile = ({params}) => {
    console.log(params)
  return (
    <div>
      <h1  className="text-center py-10">My user Profile <span className="text-3xl font-bold uppercase">{params.id}</span></h1>
    </div>
  )
}

export default MyProfile
