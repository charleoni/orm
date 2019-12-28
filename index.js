const Sequelize = require("sequelize")

const sequelize = new Sequelize("sequelize", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: (...msg) => console.log(msg) // Displays all log function call parameters
})

sequelize
	.authenticate()
	.then(() => {
		console.log("Conectado")
	})
	.catch(err => {
		console.log("No se conecto")
	})

const User = sequelize.define("user", {
	id: { type: Sequelize.SMALLINT, primaryKey: true },
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING,
	email: Sequelize.STRING,
	pass: Sequelize.STRING
})

const key = "create"
switch (key) {
	case "create":
		// Create a new user
		User.create({ firstname: "Mayra", lastname: "Navarro" }).then(result => {
			console.log("Jane's auto-generated ID:", result)
		})
		break
	case "delete":
		// Delete everyone named "Jane"
		User.destroy({
			where: {
				firstName: "Jane"
			}
		}).then(() => {
			console.log("Done")
		})
		break
	case "update":
		// Change everyone without a last name to "Doe"
		User.update(
			{ lastname: "DOE" },
			{
				where: {
					lastname: "Doe"
				}
			}
		).then(() => {
			console.log("Done")
		})
		break
	default:
		break
}
