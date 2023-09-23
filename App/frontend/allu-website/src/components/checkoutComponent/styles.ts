import styled from "styled-components";

export const ChackoutContainer = styled.div`
	padding: 1rem;
  width: 100vw;
  height: 90%;

  > .cardContainerCheckout {
		width: 100%;
		height: 100%;

		> .cardsLimit {
			width: 100%;
			height: 50%;
			overflow-y: scroll;
			border-bottom: 1px solid ${({ theme }) => theme.primary};
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		> .cardsLimit > .cardBoard {
			width: 100%;
			height: 40%;
			display: flex;
			align-items: center;
			padding: 1rem;
			gap: 1rem;
			box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
			border-radius: 0.5rem;

			> .imageContainer {
				width: 30%;
	
				> img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
	
			> .cardInfos {
				display: flex;
				flex-direction: column;
				width: 70%;
				padding: 0.5rem;
				gap: 0.5rem;
	
				> h2 {
					font-size: 1.5rem;
					font-weight: 600;
					color: ${({ theme }) => theme.primary};
				}
	
				> .productPrice {
					color: ${({ theme }) => theme.error};
				}
	
				> .controlersContainer {
					padding-top: 0.3rem;
					padding-left: 1rem;
					display: flex;
					gap: 0.5rem;
					align-items: center;
					justify-content: center;
	
					> .addLessButton {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 2rem;
						height: 2rem;
						border: none;
						border-radius: 50%;
						background-color: ${({ theme }) => theme.primary};
						color: ${({ theme }) => theme.background};
						font-size: 1rem;
						font-weight: 600;
						cursor: pointer;
					}
	
					> p {
						font-size: 1.5rem;
						font-weight: 600;
						color: ${({ theme }) => theme.primary};
					}
	
					> .removeButton {
						width: 2rem;
						height: 2rem;
						border: none;
						border-radius: 50%;
						background-color: ${({ theme }) => theme.error};
						color: ${({ theme }) => theme.background};
						font-size: 1rem;
						font-weight: 600;
						cursor: pointer;
					}
				}
			}
		}
  }
`;

export const FinishContainer = styled.div`
	width: 100%;
	height: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	> h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: ${({ theme }) => theme.primary};
	}

	> .finishButton {
		width: 50%;
		height: 2rem;
		border: none;
		border-radius: 1rem;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.background};
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
	}
`;

export const FilesDragAndDrop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50%;
	gap: 1rem;

	> p {
		font-size: 1rem;
		font-weight: 600;
		color: ${({ theme }) => theme.primary};
	}

	> button {
		width: 50%;
		height: 2rem;
		border: none;
		border-radius: 1rem;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.background};
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
	}
`;
