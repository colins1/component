function UserProfile(item){
	return (
        <div>{item.map(items => <li>{items}</li>)}</div>
        );
}
export default UserProfile;