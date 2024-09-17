import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/assets/Logo';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';


const Home = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("persist:root")) {
			const item = localStorage.getItem("persist:root") || '';
			const convItem = JSON.parse(item || '');
			const user = JSON.parse(convItem?.user || '');

			if (user?.token) router.push('/trilhas');
		}
	});

	return (
		<Main
			meta={
				<Meta
					title="Home | Caminho de Cora"
					description="Caminho de Cora Coralina"
				/>
			}
		>
			<div className="flex h-full flex-col items-center p-6">
				<Logo />
				<div className="mt-auto flex flex-col gap-4 w-full">
					<Link href="/cadastro">
						<a className="btn btn-primary">Criar uma conta</a>
					</Link>
					<Link href="/login">
						<a className="btn btn-secondary">Acessar minha conta</a>
					</Link>
				</div>
			</div>
		</Main>
	);
};

export default Home;
