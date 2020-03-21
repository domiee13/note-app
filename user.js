function User(name,userId, email, password){
	this.userId = userId;
	this.name  = name;
	this.email = email;
	this.password = password;
};

module.exports = User;