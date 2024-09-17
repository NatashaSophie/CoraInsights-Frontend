
## Frontend - Caminho de Cora

Frontend - Caminho de Cora

### Requisitos

| Tecnologia   | Versão       | 
| :---------- | :--------- | 
| Node | 18.20.4 | 
| Next.js | 12.0.4 |

### Instalação

```
npm install
npm run dev
```

### Capacitor
#### Config
```
{
	"appId": "",
	"appName": "Caminho de Cora",
	"bundledWebRuntime": false,
	"npmClient": "npm",
	"webDir": "out",
	"plugins": {
		"SplashScreen": {
			"launchShowDuration": 0
		}
	},
	"cordova": {},
	"server": {
		"androidScheme": "http",
		"cleartext": true,
		"allowNavigation": [
			"http://localhost:port/graphql/*"
		]
	}
}
```

## Documentação

- [Next.js](https://nextjs.org/docs)
- [Capacitor.js](https://capacitorjs.com/docs)
