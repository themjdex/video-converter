import { ConsoleLogger } from './out/console-logger/console-logger';
import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';


export class App {
	async run() {
		new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
	}
}

const app = new App();
app.run();