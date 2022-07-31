import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const resume = async (args: string[]): Promise<string> => {
  window.open("https://www.dropbox.com/s/4v8jsnbl9mwyvk9/resume_system.pdf?dl=0");
  return "My resume is loaded in a seperate page!";
}

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };

export const banner = (args?: string[]): string => {
  return `
██████╗  ██████╗ ██████╗ ███████╗██╗  ██╗ █████╗  ██████╗██╗  ██╗
██╔══██╗██╔═══██╗██╔══██╗██╔════╝██║  ██║██╔══██╗██╔════╝██║  ██║
██████╔╝██║   ██║██████╔╝███████╗███████║███████║██║     ███████║
██╔══██╗██║   ██║██╔══██╗╚════██║██╔══██║██╔══██║██║     ██╔══██║
██║  ██║╚██████╔╝██║  ██║███████║██║  ██║██║  ██║╚██████╗██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
New 🎉: New command 'neofetch', for you linux.
--
`;
};
