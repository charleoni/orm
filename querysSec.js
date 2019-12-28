const key = "create"
switch (key) {
	case "create":
		// Create a new user
		User.create({ firstname: "Mayra", lastname: "Navarro" }).then(result => {
			console.log("Jane's auto-generated ID:", result.null)
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
