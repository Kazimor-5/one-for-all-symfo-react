<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/addEvent", name="addEvent")
     */
    public function addEvent(CategoryRepository $categoryRepository)
    {
        $categoryList = $categoryRepository->findAll();
        dump($categoryList);
        return $this->render('default/add_event.html.twig');
    }
}