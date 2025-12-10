import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class ForLoop implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'For Loop',
		name: 'forLoop',
		group: ['transform'],
		version: 1,
		description:
			'Creates a fixed-count loop. Runs the Loop branch N times, then exits through the Done branch.',
		defaults: {
			name: 'For Loop',
		},
		inputs: ['main'],
		outputs: ['main', 'main'], // loop, done (respective)
		outputNames: ['loop', 'done'],
		properties: [
			{
				displayName: 'Number of Iterations',
				name: 'n',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				required: true,
				description: 'How many times the loop branch should run',
			},
		],
		icon: {
			dark: 'file:LoopIcon-dark.svg',
			light: 'file:LoopIcon.svg',
		},
		usableAsTool: true,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let n = this.getNodeParameter('n', 0) as number;

		n = Math.max(0, Math.floor(n));

		const state = this.getWorkflowStaticData('node') as {
			iteration?: number;
		};

		if (n === 0) {
			state.iteration = undefined;
			return [[], items];
		}

		if (state.iteration === undefined) {
			state.iteration = 1;

			return [items, []];
		}

		state.iteration += 1;

		if (state.iteration <= n) {
			return [items, []];
		}

		state.iteration = undefined;
		return [[], items];
	}
}
