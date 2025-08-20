export default [
	{
		name: "title",
		label: "Enter your title",
		type: "text",
		value: "",
	},

	{
		name: "description",
		label: "Enter your description",
		type: "textarea",
		value: "",
	},

	{
		name: "image",
		label: "Enter your image",
		type: "text",
		value: "",
	},

	{
		name: "is_voting",
		label: "Enter your is voting",
		type: "select",
		label: "Select is voting",
		multiple: false,
		data_list: [
			{
				label: "0",
				value: "0",
			},
			{
				label: "1",
				value: "1",
			},
		],
		value: "",
	},
];
