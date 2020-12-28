import React from 'react';
import './styles.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Card from './items'

export default function MulCarousel() {
	return (

		<div className="carousel">
			<input
				defaultChecked
				className="carousel__activator"
				id="carousel-slide-activator-1"
				name="carousel"
				type="radio"
			/>
			<input className="carousel__activator" id="carousel-slide-activator-2" name="carousel" type="radio" />
			<input className="carousel__activator" id="carousel-slide-activator-3" name="carousel" type="radio" />
			<div className="carousel__controls">
				<label
					className="carousel__control carousel__control--forward"
					htmlFor="carousel-slide-activator-2"
				>
					<ArrowForwardIosIcon></ArrowForwardIosIcon>
				</label>
			</div>
			<div className="carousel__controls">
				<label
					className="carousel__control carousel__control--backward"
					htmlFor="carousel-slide-activator-1"
				>
					<ArrowBackIosIcon></ArrowBackIosIcon>
				</label>
				<label
					className="carousel__control carousel__control--forward"
					htmlFor="carousel-slide-activator-3"
				>
					<ArrowForwardIosIcon></ArrowForwardIosIcon>
				</label>
			</div>
			<div className="carousel__controls">
				<label
					className="carousel__control carousel__control--backward"
					htmlFor="carousel-slide-activator-2"
				>
					<ArrowBackIosIcon></ArrowBackIosIcon>
				</label>
			</div>
			<div className="carousel__screen">
				<div className="carousel__track">
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
					<div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
						<div className="content">
							<Card></Card>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}
