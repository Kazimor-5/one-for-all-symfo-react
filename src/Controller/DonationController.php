<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DonationController extends AbstractController
{
    #[Route('/donation', name: 'app_donation')]
    public function index(): Response
    {
        $form = $this->createFormBuilder()
                ->add('amount', IntegerType::class)
                ->add('donate', SubmitType::class)
                ->setAction($this->generateUrl('checkout'))
                ->setMethod('POST')
                ->getForm();
        
        return $this->render('donation/index.html.twig', [
            'controller_name' => 'DonationController',
            'donation_form' => $form->createView(),
        ]);
    }
}
